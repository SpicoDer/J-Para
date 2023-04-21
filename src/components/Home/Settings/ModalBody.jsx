import ToggleBtn from '../ToggleBtn.jsx';

function ModalBody({ alertState }) {
  return (
    <div className='border-4 border-y-prim-400 border-x-transparent p-4 '>
      <ToggleBtn
        id='notif'
        label='notification alert'
        alertState={alertState}
      />
    </div>
  );
}

export default ModalBody;
