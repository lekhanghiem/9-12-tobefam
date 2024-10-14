'use client'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
import { Button } from '@mui/material';
const CustomButton = styled(Button)({
  background: 'linear-gradient(90deg, #4CAF50, #008CBA)',
  borderRadius: '20px',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  textTransform: 'none',
  border: '2px solid transparent',
  '&:hover': {
    background: 'linear-gradient(90deg, #45a049, #007bb5)',
    border: '2px solid white',
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: ' rgba(6, 100, 153, 0.3);',
  borderRadius: 66,
  border: ' 2px solid #efe6af54;',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  minHeight:'500px',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Items = styled(Paper)(({ theme }) => ({
  backgroundColor: ' rgba(6, 100, 153, 0.3);',
  borderRadius: 66,
  border: ' 2px solid #efe6af54;',

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  minHeight:'400px',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Security = () => {
  return (
    <div>
<div className='background py-10'>
<div className='text-5xl text-white font-bold pb-10'>Bảo mật nông sản</div>
  <Box sx={{ width: '90%' }}>
<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} lg={6}>
    <Item >
     <div className='text-white w-11/12 mx-auto leading-10 py-10 text-left'>
       <div className='text-3xl '>TRIỂN KHAI AN TOÀN SINH HỌC BÊN NGOÀI TRANG TRẠI ĐỂ GIẢM THIỂU SỰ GÂY BỆNH</div>
        <Divider />
      <div className='text-xl '>
        <p className='pt-5'>- Chỉ mua gia súc, gia cầm từ 1-2 nguồn cung.</p>
        <p className='pt-5'>- Làm sạch, khử trùng, khử trùng hoàn toàn người và phương tiện ra vào trang trại Người và phương tiện không được phép vào khu vực trang trại. (khu vực tập kết gia súc, gia cầm chuẩn bị bán).</p>
        <p className='pt-5'>- Cấm mang phân, xác gia súc, gia cầm vào khu chăn nuôi (cổng xuất, nhập chung).</p>
        <p className='pt-5'>- Hạn chế lượng khách truy cập càng nhiều càng tốt. Khách và nhân viên vào trang trại phải thay quần áo, giày dép..., rửa tay sát khuẩn trước khi vào khu vực trang trại.</p>
        <p className='pt-5'>- Thường xuyên kiểm soát các loài gây hại như chuột, chim hoang,...</p>
        <p className='pt-5'>- Kiểm soát phân, nước thải, xác gia súc, gia cầm chết: bố trí theo nguyên tắc một chiều, không chồng chéo khu sạch và khu bẩn.</p>
      </div>
     </div>
    </Item>
  </Grid>
  <Grid item xs={12} lg={6}>
    <Item >
     <div className='text-white w-11/12 mx-auto leading-10 py-10 text-left'>
       <div className='text-3xl '>TRIỂN KHAI AN TOÀN SINH HỌC BÊN NGOÀI TRANG TRẠI ĐỂ GIẢM THIỂU SỰ GÂY BỆNH</div>
        <Divider />
      <div className='text-xl '>
        <p className='pt-5'>- Bố trí khu vực chuồng trại theo quy tắc 1 chiều: Lợn nái đẻ - Theo mẹ - Cai sữa - Thịt); Tránh càng nhiều sự xáo trộn trong chuồng càng tốt.</p>
        <p className='pt-5'>- Sử dụng các công cụ riêng biệt cho từng loại thức ăn trong chuồng.
- Đã tiêm phòng đầy đủ theo quy định.</p>
        <p className='pt-5'>- Nghiêm cấm nuôi thú cưng (chó, mèo, chim...) trong khu vực chăn nuôi.</p>
        <p className='pt-5'>- Vệ sinh, khử trùng chuồng trại, thiết bị định kỳ và sau mỗi lứa.</p>
        <p className='pt-5'>- Hạn chế tối đa việc sử dụng thức ăn thừa trong bếp. Nếu dùng phải đun sôi kỹ để diệt vi khuẩn.</p>
        <p className='pt-5'>- Công nhân trang trại: dọn dẹp, thay quần áo, giày dép chuyên dụng tại từng khu vực chuồng trại... tắm rửa khử trùng trước khi vào khu vực nuôi.</p>
         <p className='pt-10 text-3xl text-right'>Theo Cục Chăn nuôi và Thú y tỉnh Đồng Nai</p>
      </div>
     </div>
    </Item>
  </Grid>
</Grid>
</Box>
 <Box sx={{ width: '90%',paddingTop:'100px' }}>
      <Grid container rowSpacing={10} columnSpacing={ 10}>
       <Grid item xs={12} lg={6} className=''>
  <Items>
    <div className="text-white w-[90%] mx-auto ">
      <div className="text-3xl py-5 text-left  z-10">
        Truy xuất nguồn gốc
      </div>
      <div className="flex justify-end">
        <div className="relative">
          <Image
            src="/img/security/qrscan.svg"
            alt="qr scan"
            width={288}
            height={288}
            className="relative z-0"
          />
        </div>
      </div>
    </div>
  </Items>
</Grid>
        <Grid item xs={12} lg={6} className="">
  <Items className="relative">
    <div className="lg:w-4/12 w-6/12 absolute right-[-20px] top-[-20px] ">
    <Image
      className=""
      src="/img/security/Rectangle39894.svg"
      alt="/img/security/Rectangle39894.svg"
      width={309}
      height={211}
    />
  </div>
   <div className="text-white w-[90%] mx-auto ">

  <div className="relative z-20">
    <div className="text-3xl py-5 text-left">
      Quản trị vùng sản xuất
    </div>
    <div className="text-xl py-5 text-left">
      Giám sát quy trình từ xa.
    </div>
  </div>
  <div className="absolute right-24 bottom-24 z-30">
    <CustomButton variant="contained">
      Tư vấn ngay
    </CustomButton>
  </div>
</div>

  </Items>
</Grid>

      <Grid item xs={12} lg={6} >
  <Items className="relative">
     <div className="lg:w-4/12 w-6/12 absolute left-[-20px] bottom-[-20px] ">
    <Image
      className=""
      src="/img/security/Rectangle39894.svg"
      alt="/img/security/Rectangle39894.svg"
      width={309}
      height={211}
    />
  </div>
    <div className="text-white w-[90%] mx-auto ">
     <div className='z-0'>
       <div className="text-3xl py-5 text-left">
        Quản trị chuỗi cung ứng
      </div>
      <div className="text-xl py-5 text-left">
        Kiểm soát chất lượng, hỗ trợ đưa ra quyết định.
      </div>
     </div>
      <div className="absolute right-24 bottom-24  z-20">
        <CustomButton variant="contained">
          Tư vấn ngay
        </CustomButton>
      </div>

    </div>
  </Items>
</Grid>
       <Grid item xs={12} lg={6} >
  <Items className="relative">
     <div className="lg:w-4/12 w-6/12 absolute top-[30%] right-[-20px] ">
    <Image
      className=""
      src="/img/security/Vector.svg"
      alt="/img/security/Vector.svg"
      width={309}
      height={211}
    />
  </div>
    <div className="text-white w-[90%] mx-auto ">
     <div className='z-0'>
       <div className="text-3xl py-5 text-left">
        Sàn thương mại điện tử
      </div>
      <div className="text-xl py-5 text-left">
       Giao dịch, tiếp cận thị trường và gia
tăng doanh số.
      </div>
     </div>
      <div className="absolute right-24 bottom-24  z-20">
        <CustomButton variant="contained">
          Tư vấn ngay
        </CustomButton>
      </div>

    </div>
  </Items>
</Grid>
      </Grid>
    </Box>
</div>


    </div>
  )
}

export default Security