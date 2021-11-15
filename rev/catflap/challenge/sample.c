#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main(void) {
  int mode;
  char buf[0x100];

  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stdout, NULL, _IONBF, 0);

  printf("Text: ");
  scanf("%100s", buf);

  printf("Mode [0=tolower / 1=toupper]: ");
  scanf("%d", &mode);

  if (syscall(1337, buf, 0x100, mode) != 0) {
    puts("[-] Invalid input");
    return 1;
  }

  printf("Result: %s\n", buf);

  return 0;
}
