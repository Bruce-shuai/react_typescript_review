/**
 * Position prop can be one of
 * "left-center" | "left-right" | "top-left" | "top-right" | "center" | "bottom-left" | "bottom-right" | ....
 */

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

// type ToastProps = {
//   position: `${HorizontalPosition}-${VerticalPosition}`     // 这里是真的牛逼
// }

// 将center-center 转化为 center
type ToastProps = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
}