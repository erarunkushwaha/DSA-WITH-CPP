// find first occurance
#include <iostream>  // std::cout
#include <algorithm> // std::binary_search, std::sort
#include <vector>
using namespace std;

int firstOccurance(vector<int> v, int target)
{
    int s = 0;
    int e = v.size() - 1;
    int mid = ((s + e) / 2);
    int ans = -1;

    while (s <= e)
    {
        if (v[mid] == target)
        {
            // store answer and move to left
            cout << "mid::" << mid << endl;
            ans = mid;

            // for first occurance
            e = mid - 1;

            // for last occurance
            // s = mid + 1;
        }
        else if (target > v[mid])
        {
            s = mid + 1;
        }
        else if (target < v[mid])
        {
            e = mid - 1;
        }
        mid = ((s + e) / 2);
    }
    return ans;
}

int main()
{
    vector<int> v = {2, 3, 4, 4, 4, 4, 5, 6, 7};
    int target = 4;
    int indexOfOcc = firstOccurance(v, target);

    cout << "ans is :: " << indexOfOcc << endl;

    return 0;
}