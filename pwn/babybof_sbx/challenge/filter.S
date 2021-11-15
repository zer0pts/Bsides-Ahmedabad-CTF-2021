A = arch
A == ARCH_X86_64 ? next : kill
A = sys_number
A >= 0x40000000 ? kill : next
A == open ? kill : next
A == openat ? kill : next
A == fork ? kill : next
A == vfork ? kill : next
A == execve ? kill : next
A == execveat ? kill : next
A == clone ? kill : next
A == ptrace ? kill : next
A == kill ? kill : next
A == tkill ? kill : next
A == tgkill ? kill : next
return ALLOW
kill:
return KILL
