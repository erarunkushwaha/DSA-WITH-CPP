#include <iostream>  // std::cout
#include <algorithm> // std::binary_search, std::sort
#include <vector>
using namespace std;

int main()
{

    vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9};

    if (binary_search(v.begin(), v.end(), 3))
    {
        cout << "found at ::";
    }
    else
    {
        cout << "Not found found  ::";
    }

    return 0;
}