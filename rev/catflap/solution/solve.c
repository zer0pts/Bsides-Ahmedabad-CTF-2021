#define _GNU_SOURCE
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/prctl.h>
#include <sys/mman.h>
#include <pthread.h>
#include <sys/types.h>
#include <sys/wait.h>

void *f(void *args) {
  char *p;

  /* Check2 */
  p = (char*)mmap((void*)0xca7c000, 0x2000,
                  PROT_READ | PROT_WRITE,
                  MAP_PRIVATE | MAP_FIXED | MAP_ANONYMOUS,
                  -1, 0);
  if (p != (void*)0xca7c000) {
    perror("mmap");
    return 1;
  }
  *(unsigned long*)&p[0xafe] = 0x006f616d6e616873;

  /* Check3 */
  prctl(PR_SET_NAME, "o-yamaneko", 0, 0, 0);

  /* Check5 */
  close(0);
  int fd = memfd_create("foo", 0);
  if (fd != 0)
    exit(1);

  /* Check1 */
  syscall(1337, 0xdead, 1, 0);

  /* Win */
  char buf[0x10];
  syscall(1337, buf, 0, 0);
  if (getuid() == 0) {
    puts("[+] Win");
    system("cat /root/flag.txt");
  } else {
    puts("[-] Failed");
  }

  munmap(p, 0x2000);
  return NULL;
}

int main() {
  pthread_t th;
  /* Check 4 */
  pthread_create(&th, NULL, f, NULL);
  pthread_join(th, NULL);
  return 0;
}
