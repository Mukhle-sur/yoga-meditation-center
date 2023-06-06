import Container from "../Container";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-[1px]">
        <Container>
          <div className="flex justify-between items-center">
            <div>
                logo
            </div>
            <div>
                menu
            </div>
            <div>
                userProfile
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
