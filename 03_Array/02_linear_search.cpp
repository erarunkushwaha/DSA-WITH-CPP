#include <iostream>

using namespace std;

// linear search

bool find(int arr[], int size, int key)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == key)
        {
            return true;
        }
    }
    return false;
}

int main()
{
    int arr[] = {5, 6, 8, 10, 12, 13, 14, 15};
    int size = 8;
    cout << "Enter the key to find:: ";
    int key;
    cin >> key;

    if (find(arr, size, key))
    {
        cout << " found" << endl;
    }
    else
    {
        cout << "not found";
    }
}