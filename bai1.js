import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập số thứ nhất: ");
        int num1 = scanner.nextInt();
        System.out.print("Nhập số thứ hai: ");
        int num2 = scanner.nextInt();

        int sum = num1 + num2;
        int difference = num1 - num2;
        int product = num1 * num2;
        int quotient = num1 / num2;
        int remainder = num1 % num2;

        System.out.println("Tổng của hai số là: " + sum);
        System.out.println("Hiệu của hai số là: " + difference);
        System.out.println("Tích của hai số là: " + product);
        System.out.println("Thương của hai số là: " + quotient);
        System.out.println("Số dư của hai số là: " + remainder);

        if (num1 == num2) {
            System.out.println(num1 + " bằng " + num2);
        } else {
            System.out.println(num1 + " khác " + num2);
        }

        if (num1 < num2) {
            System.out.println(num1 + " nhỏ hơn " + num2);
        } else if (num1 > num2) {
            System.out.println(num1 + " lớn hơn " + num2);
        } else {
            System.out.println(num1 + " bằng " + num2);
        }
    }
}

