#include <iostream>
#include <limits.h>

using namespace std;

// linear search

int main()
{
    int arr[] = {1, 2, 3, 4, 6, 8, 5, 15, 57, 58};
    int size = 10;

    int maxNumber = INT_MIN;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] > maxNumber)
        {
            maxNumber = arr[i];
        }
    }

    cout << "Manium Number :: " << maxNumber << endl;
}