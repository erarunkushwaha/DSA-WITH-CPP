#include <iostream>
#include <vector>
using namespace std;

int findSqrt(int n)
{
    int target = n;
    int s = 0;
    int e = n;
    int ans = -1;
    int mid = s + (e - s) / 2;

    while (s <= e)
    {

        if (mid * mid == target)
        {
            return mid;
        }
        if (mid * mid > target)
        {
            // left search
            e = mid - 1;
        }

        if (mid * mid < target)
        {
            ans = mid;
            s = mid + 1;
        }
        mid = s + (e - s) / 2;
    }

    return ans;
}

int main()
{
    int n;
    cout << "Enter the number" << endl;
    cin >> n;
    int ans = findSqrt(n);
    cout << "Anser is :: " << ans << endl;

    int precision;
    cout << "Enter the number of floatig digits in precision" << endl;
    cin >> precision;

    double step = 0.1;
    double finalAns = ans;

    for (int i = 0; i < precision; i++)
    {
        for (double j = finalAns; j * j < n; j = j + step)
        {
            finalAns = j;
        }
        step = step / 10;
    }
    cout << "final answer is :: " << finalAns << endl;

    return 0;
}
