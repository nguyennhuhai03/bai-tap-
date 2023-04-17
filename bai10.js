import java.util.Scanner;

public class Bai10 {
public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	System.out.println("Nhap vao mot chuoi : ");
	String chuoi=sc.nextLine();
	System.out.println("Nhap vao mot ky tu: ");
	char ch=sc.next().charAt(0);
	int dem=0;
	for(int i=0;i<chuoi.length();i++) {
		if(chuoi.charAt(i)==ch) {
			dem++;
		}
	}
	System.out.println("So ky tu "+ch+"xuat hien trong chuoi la: "+dem);
}
}