#include <iostream>  // std::cout
#include <algorithm> // std::binary_search, std::sort
#include <vector>
using namespace std;

int main()
{
    vector<int> v = {1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 7,8,9,10};
    vector<int>::iterator low, up;
    int target = 4;

    low = lower_bound(v.begin(), v.end(), target);
    up = upper_bound(v.begin(), v.end(), target);

    cout
        << "lower bound is :: " << (low - v.begin()) << endl;

    cout << "upper bound is :: " << (up - v.begin()) << endl;

    cout << "total occurancr is ::" << (up - v.begin()) -  (low - v.begin())  <<endl;
        return 0;
}