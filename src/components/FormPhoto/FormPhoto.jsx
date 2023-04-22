// import styled from 'styled-components';

// export default function FormPhoto({ handleCloseFormPhoto }) {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const file = e.target.file.files[0];

//     const formData = new FormData();
//     formData.append('image', file, file.name);
//     handleCloseFormPhoto();
//   };
//   return (
//     <Form className="open" onSubmit={handleSubmit}>
//       <Input type="file" name="file" />
//       <Button type="submit">Download </Button>
//     </Form>
//   );
// }

// const Form = styled.form`
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   top: 64px;
//   right: 0;
//   transform: translateY(100%);
//   background-color: #fff;
//   opacity: 0;
//   transition: all 0.3s ease-in-out;
//   z-index: 999;
//   padding: 32px;
//   background-color: rgb(255, 255, 255);
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
//   border-radius: 8px;
//   &.open {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;
// const Input = styled.input``;
// const Button = styled.button``;
