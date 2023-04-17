import java.util.Scanner;

public class Bai9 {
public static void main(String[] args) {
	Scanner sc= new Scanner(System.in);
	System.out.println("Nhap vao chuoi: ");
	String chuoi=sc.nextLine();
	 int kytuhoa=0;
	 int kytuthuong=0;
	 int so=0;
	 for(int i=0;i<chuoi.length();i++) {
		 char ch=chuoi.charAt(i);
		if( ch >= 'A' && ch <='Z') {
			kytuhoa++;
		}
		if(ch >='a' && ch<= 'z') {
			kytuthuong++;
		}
		if(ch>='0' && ch<='9') {
			so++;
		}
		
}
	 	System.out.println("So ky tu hoa trong chuoi la: "+kytuhoa);
		System.out.println("So ky tu thuong trong chuoi la: "+kytuthuong);
		System.out.println("So chu so trong chuoi la: "+so);
}
}