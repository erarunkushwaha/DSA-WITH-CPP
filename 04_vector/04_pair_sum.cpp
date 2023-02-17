#include <iostream>
#include <vector>
#include <limits.h>

using namespace std;

// fina the pari that upons addtion gives the value equal to sum

int main()
{

    vector<int> arr = {2, 3, 4, 5, 6, 7, 8};
    int sum = 9;

    for (int i = 0; i < arr.size(); i++)
    {
        int element = arr[i];
        cout << "We are at element  " << element << endl;

        // this loop is just for printing the pairs
        for (int j = i + 1; j < arr.size(); j++)
        {
            /* print pair */
            cout << "{ " << element << "," << arr[j] << " }" << endl;
            ;
        }

        for (int j = i + 1; j < arr.size(); j++)
        {
            // finding pair
            if (element + arr[j] == sum)
            {
                cout << "Pair Found:: {" << element << "," << arr[j] << " } " << endl;
            }
        }
    }

    return 0;
}