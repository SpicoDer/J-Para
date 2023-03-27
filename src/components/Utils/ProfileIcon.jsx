/**

A React component that renders a profile icon with initials and a customizable size.
@param {object} props - The props object for the component.
@param {number} props.size - The size of the icon.
@returns {JSX.Element} - A div element representing the profile icon.
*/
function ProfileIcon({ size, pad }) {
  return (
    <div
      className={`grid h-${size} w-${size} place-items-center rounded-full bg-prim-400 p-${pad}`}
    >
      <p>JC</p>
    </div>
  );
}

export default ProfileIcon;
