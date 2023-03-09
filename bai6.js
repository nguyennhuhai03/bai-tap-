import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Nhập số nguyên dương từ bàn phím
        System.out.print("Nhập số nguyên dương: ");
        int n = scanner.nextInt();

        // Kiểm tra giá trị hợp lệ của n và tính giai thừa
        if (n < 0) {
            System.out.println("Số nhập vào không hợp lệ!");
        } else if (n == 0) {
            System.out.println("Giai thừa của 0 là 1");
        } else {
            int giaiThua = 1;
            for (int i = 1; i <= n; i++) {
                giaiThua *= i;
            }
            System.out.println("Giai thừa của " + n + " là " + giaiThua);
        }
    }
}
