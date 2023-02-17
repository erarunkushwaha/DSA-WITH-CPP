#include <iostream>
#include <vector>
#include <limits.h>

using namespace std;

int main()
{

    vector<int> arr{10, 20, 30, 40, 50, 60, 70, 80};
    int sum = 80;

    // printing the pair

    for (int i = 0; i < arr.size(); i++)
    {
        int element = arr[i];

        for (int j = i + 1; j < arr.size(); j++)
        {
            int element2 = arr[j];

            for (int k = j + 1; k < arr.size(); k++)

            {
                int element3 = arr[k];
                /* code */
                cout << "{ " << element << " ," << element2 << ", " << element3 << " }" << endl;
            }
        }
    }

    // finding the pair
    for (int i = 0; i < arr.size(); i++)
    {
        int element = arr[i];

        for (int j = i + 1; j < arr.size(); j++)
        {
            int element2 = arr[j];

            for (int k = j + 1; k < arr.size(); k++)

            {
                int element3 = arr[k];
                if (element + element2 + element3 == sum)
                {

                    cout << "pair found :: "
                         << "{ " << element << " ," << element2 << ", " << element3 << " }" << endl;
                }
                /* code */
            }
        }
    }

    return 0;
}