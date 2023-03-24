import ToggleBtn from '../../Utils/ToggleBtn';

function ModalBody() {
  return (
    <div className='border-4 border-y-prim-400 border-x-transparent py-4 px-4'>
      <ToggleBtn id='alert' label='notification alert' />
      <ToggleBtn id='sms' label='SMS alert' />
      <ToggleBtn id='distance' label='distance notification' />
    </div>
  );
}

export default ModalBody;
