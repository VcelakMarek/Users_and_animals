const accessStatus = {
  allowed: ["bg-[#33D69F]", "text-[#33D69F]"],
  banned: ["bg-[#D53333]", "text-[#D53333]"],
};

type AccessStatusProps = {
  isBanned: boolean;
  onClick: () => void;
};

const AccessStatus = ({ isBanned, onClick }: AccessStatusProps) => {
  const status = isBanned ? "banned" : "allowed";
  const color = accessStatus[status];

  return (
    <button onClick={onClick}>
      <div
        className={`flex h-10 w-[104px] rounded-md bg-opacity-10 ${color[0]}`}
      >
        <div className="m-auto flex items-center text-xs font-bold">
          <div
            className={`mr-2 h-2 w-2 rounded-full opacity-100 ${color[0]}`}
          />
          <p className={`pt-0.5 first-letter:uppercase ${color[1]}`}>
            {status}
          </p>
        </div>
      </div>
    </button>
  );
};

export default AccessStatus;
