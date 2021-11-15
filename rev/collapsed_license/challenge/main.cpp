#include <iostream>
#include <fstream>
#include <vector>
#include <set>
#include <unordered_set>
#include <numeric>

#define N 256

using namespace std;

class Direction
{
public:
  Direction(int dx, int dy): _dx(dx), _dy(dy) {}
  Direction(const Direction &rhs): _dx(rhs._dx), _dy(rhs._dy) {}
  bool operator==(Direction const& rhs) const {
    return _dy * rhs._dx == rhs._dy * _dx;
  }
  Direction operator-(Direction const& rhs) {
    Direction v(_dx - rhs._dx, _dy - rhs._dy);
    return v;
  }
  const int x() const { return _dx; }
  const int y() const { return _dy; }

private:
  int _dx, _dy;
};

namespace std {
  template <> class hash<Direction> {
  public:
    size_t operator() (Direction const& rhs) const {
      return rhs.x() * rhs.y();
    }
  };
}

class License
{
public:
  License(const char *filepath) {
    ifstream fin(filepath, ios::in | ios::binary);
    if (!fin)
      throw "File not found";

    fin.seekg(0, ios_base::end);
    long size = fin.tellg();
    if (size != N * ((N+7) / 8))
      throw "Invalid format";
    fin.seekg(0, ios_base::beg);

    char *buf = new char[size]();
    fin.read(buf, size);

    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if ((buf[i*((N+7)/8)+j/8] >> (j%8)) & 1) {
          _ps.push_back(Direction(j, i));
        }
      }
    }
  }

  void validate() {
    unordered_set<Direction> vs;
    vector<Direction> ps = _ps;

    if (ps.size() != N)
      throw "Invalid license";

    while (ps.size() > 0) {
      Direction a = ps.back();
      ps.pop_back();

      for (Direction b: ps) {
        if (a.x() == b.x() || a.y() == b.y())
          throw "Invalid license";
        if (vs.find(a - b) != vs.end())
          throw "Invalid license";
        vs.insert(a - b);
      }
    }
  }

private:
  vector<Direction> _ps;
};

int main(int argc, char **argv)
{
  if (argc < 2) {
    cout << "Usage: " << argv[0] << " <License File>" << endl;
    return 1;
  }

  try {
    License lic(argv[1]);
    lic.validate();
    ifstream fin("./flag.txt", ios::in);
    if (!fin) {
      cout << "flag.txt not found :thinking_face:" << endl;
    } else {
      string flag;
      fin >> flag;
      cout << "FLAG: " << flag << endl;
    }
  } catch(...) {
    cout << "[-] Invalid license file" << endl;
  }

  return 0;
}
