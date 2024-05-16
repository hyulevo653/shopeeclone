export const purchasesStatus = {
    inCart: -1, // trong giỏ hàng
    all: 0,
    waitForConfirmation: 1, // đợi xác nhận
    waitForGetting: 2, //đang lấy hàng
    inProgress: 3, //sản phẩm đang vận chuyển
    delivered: 4,// đã được giao
    cancelled: 5, // bị hủy
} as const