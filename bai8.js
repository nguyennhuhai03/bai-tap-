import java.util.Scanner;

public class AverageOfN {
    public static void main(String[] args) {
        int n, sum = 0;
        double avg;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Nhập vào số lượng số nguyên n: ");
        n = scanner.nextInt();

        // nhập vào n số nguyên và tính tổng
        for (int i = 0; i < n; i++) {
            System.out.print("Nhập vào số nguyên thứ " + (i+1) + ": ");
            int num = scanner.nextInt();
            sum += num;
        }

        // tính trung bình cộng
        avg = (double) sum / n;

        // in kết quả ra màn hình
        System.out.println("Trung bình cộng của " + n + " số nguyên đã nhập là: " + avg);

        // đóng đối tượng Scanner
        scanner.close();
    }
}
