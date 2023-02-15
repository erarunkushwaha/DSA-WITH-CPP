#include <iostream>

using namespace std;

// linear search

int main()
{
    int arr[] = {1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1};
    int size = 15;
    int totalZero = 0;
    int totalOne = 0;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] == 1)
        {
            totalOne++;
        }
        if (arr[i] == 0)
        {
            totalZero++;
        }
    }

    cout << "Totoal One :: " << totalOne << endl;
    cout << "Totoal Zero :: " << totalZero << endl;
}