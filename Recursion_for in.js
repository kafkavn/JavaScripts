/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
// Ham test thu cua ban Cuong tren git, 
//Chạy ra kết quả đúng nhưng vẫn hạn chế khi chỉ truy xuất được vòng thứ 2
// giả sử có thêm một vòng {} thứ 3 bên trong nữa thì không đúng nữa
// Cần tìm giải thuật như cây nhị phân, có thể giải quyết????
var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
function result(arr){
  for(var index in arr){
    console.log(index);
  }
  if(index != null){
    result(arr[index]);
  }
}

result(apartment);
  
/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên