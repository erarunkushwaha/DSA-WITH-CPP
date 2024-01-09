#include<iostream>
#include<vector>
using namespace  std;

int findSqrt(int n){
    int target = n;
    int s = 0;
    int e = n;
    int ans = -1;
    int mid = s + (e-s)/2;

    while(s <= e){

      if(mid * mid == target){
        return mid;
      }
      if(mid * mid > target){
        // left search
        e = mid-1;
      } 

      if(mid * mid < target){
        ans = mid;
        s = mid+1;
      }
       mid = s + (e-s)/2;
    }

    return ans;

}


int main(){
    int n;
    cout <<"Enter the number" << endl;
    cin >> n;
    int ans = findSqrt(n);
    cout << "Anser is :: "<< ans << endl;

    return  0;
}
