import java.util.Scanner;

public class B11 {
public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	int n,tam;
	do {
		System.out.println("Nhap so phan tu cua mang: ");
		n=sc.nextInt();
	}while(n<=0);
	int A[] = new int [n];
	for(int i=0;i<A.length;i++) {
		System.out.println("A["+i+"]= ");
		A[i]=sc.nextInt();
	}
	System.out.println("mang ban dau la: ");
	for(int i=0;i<A.length;i++) {
		System.out.println(A[i]);
	}
	for(int i=0;i<A.length-1;i++) {
		int min=i;
		for(int j=i+1;j<A.length;j++) {
			if(A[j]<A[min]) {
				min=j;
			}
			tam=A[i];
			A[i]=A[min];
			A[min]=tam;
		}
	}
	System.out.println("mang sau khi sap xep: ");
	for(int i=0;i<A.length;i++) {
		System.out.println(A[i]);
	}

}
}