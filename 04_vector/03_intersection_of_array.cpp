#include <iostream>
#include <vector>
#include <limits.h>

using namespace std;

int main()
{

    vector<int> arra = {1, 2, 3, 3, 4};
    vector<int> arrb = {5, 6, 4, 7, 3, 3, 8};
    vector<int> ans;

    for (int i = 0; i < arra.size(); i++)
    {
        for (int j = 0; j < arrb.size(); j++)
        {
            if (arra[i] == arrb[j])
            {
                ans.push_back(arra[i]);
                arrb[j] = INT_MIN;
            }
        }
    }

    cout << " Answer:: ";

    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }

    return 0;
}