#include<iostream>
#include<vector>
using namespace std;


int main(){
    vector<int> arr{10,3,40,20,50,80,70};
    int target = 40;

    int ans = binarySearch(arr, target);

    cout << "index of target " << target << "is" <<  ans <<endl;


    return 0;
}