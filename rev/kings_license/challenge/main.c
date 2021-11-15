#include <stdio.h>
#include <stdlib.h>

typedef struct {
  char board[24][24];
} LICENSE;

void nop() {
  unsigned long pos;
  asm goto("call %l0;"::::tabi);
 tabi:
  asm volatile("popq %rax;");
  asm volatile("movq %%rax, %0": "=g"(pos));
  if (pos <= 0xffffffff) exit(1);
}

LICENSE *load_license(const char *filepath)
{
  FILE *fp = fopen(filepath, "r");
  if (!fp)
    return NULL;

  fseek(fp, 0, SEEK_END);
  long size = ftell(fp);
  fseek(fp, 0, SEEK_SET);

  if (size != 3*24)
    goto FAIL_FCLOSE;

  LICENSE *lic = (LICENSE*)malloc(sizeof(LICENSE));
  if (!lic)
    goto FAIL_FCLOSE;

  char buf[3*24];
  if (fread(buf, sizeof(char), 3*24, fp) != 3*24)
    goto FAIL;
  fclose(fp);

  for (int i = 0; i < 24; i++) {
    for (int j = 0; j < 24; j++) {
      lic->board[i][j] = (buf[i*3+j/8] >> (j%8)) & 1;
    }
  }

  return lic;

 FAIL:
  free(lic);
 FAIL_FCLOSE:
  fclose(fp);
  return NULL;
}

int is_valid_license(LICENSE *lic)
{
  int n = 0;
  for (int y = 0; y < 24; y++) {
    for (int x = 0; x < 24; x++) {
      if (lic->board[y][x] == 1) n++;
    }
  }
  if (n != 24) return 0;
  for (int y = 0; y < 24; y++) {
    nop();
    for (int x = 0; x < 24; x++) {
      nop();
      if (lic->board[y][x] == 0) continue;
      for (int j = 0; j < 24; j++) {
        nop();
        if ((j != x) && (lic->board[y][j] == 1)) return 0;
      }
      for (int i = 0; i < 24; i++) {
        nop();
        if ((i != y) && (lic->board[i][x] == 1)) return 0;
      }
      for (int i = y-1, j = x-1; i >= 0 && j >= 0; i--, j--) {
        nop();
        if (lic->board[i][j] == 1) return 0;
      }
      for (int i = y+1, j = x-1; i < 24 && j >= 0; i++, j--) {
        nop();
        if (lic->board[i][j] == 1) return 0;
      }
    }
  }
  return 1;
}

void delete_license(LICENSE *lic)
{
  free(lic);
}

int main(int argc, char **argv)
{
  if (argc < 2) {
    printf("Usage: %s <License File>\n", argv[0]);
    return 1;
  }

  LICENSE *lic = load_license(argv[1]);
  if (!lic) {
    puts("[-] Invalid license file");
    return 1;
  }

  if (is_valid_license(lic)) {
    char flag[0x80];
    FILE *fp = fopen("./flag.txt", "r");
    if (fp) {
      fread(flag, sizeof(char), 0x80, fp);
      fclose(fp);
      printf("[+] FLAG: %s", flag);
    } else {
      puts("[+] flag.txt not found :thinking_face:");
    }
  } else {
    puts("[-] Invalid license file");
  }

  delete_license(lic);
  return 0;
}
