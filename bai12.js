import java.util.Scanner;

public class B12 {
public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	int m,n;
	do {
	System.out.println("Nhap vao so hang va cot cua ma tran: ");
	n=sc.nextInt();
	m=sc.nextInt();
	}while(n<=0 || m<=0);
	int A[][]=new int [n][m];
	for(int i=0;i<n;i++) {
		for(int j=0;j<m;j++) {
			System.out.println("A["+i+"]["+j+"]=");
			A[i][j]=sc.nextInt();
		}
	}
	int max=A[0][0];
	for(int i=0;i<n;i++) {
		for(int j=0;j<m;j++) {
			if(max<A[i][j]) max=A[i][j];
		}
	}
	System.out.println("Gia tri lon nhat trong mang la: "+max);
	
}
}