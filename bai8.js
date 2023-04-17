import java.util.Scanner;

public class B8 {
public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	int n;
	int A[];
	do {
		System.out.println("Nhap vao so phan tu cua mang: ");
		n=sc.nextInt();
	}while(n<=0);
	A=new int [n];
	for(int i=0;i<A.length;i++) {
		System.out.println("A["+i+"]=");
		A[i]=sc.nextInt();
	}
	float tong=0,trungbinhcong;
	for(int i=0;i<A.length;i++) {
		tong+=A[i];
	}
	trungbinhcong=tong/n;
	System.out.println("Trung binh cong cua cac so vua nhap la: "+trungbinhcong);
}
}