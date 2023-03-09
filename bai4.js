import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] months = {"", "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", 
                           "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"};

        // Nhập số tháng từ bàn phím
        System.out.print("Nhập vào số từ 1 đến 12: ");
        int monthNumber = scanner.nextInt();

        // Kiểm tra giá trị hợp lệ và hiển thị tên tháng tương ứng
        if (monthNumber >= 1 && monthNumber <= 12) {
            System.out.println(months[monthNumber]);
        } else {
            System.out.println("Số không hợp lệ!");
        }
    }
}

