type AccessStatusTypes = {
  [key: string]: string[];
};

const accessStatus: AccessStatusTypes = {
  Allowed: ["bg-[#33D69F]", "text-[#33D69F]"],
  Banned: ["bg-[#D53333]", "text-[#D53333]"],
};

type Props = {
  isBanned: boolean;
};

const AccessStatus = ({ isBanned }: Props) => {
  const status = isBanned ? "Banned" : "Allowed";
  const color = accessStatus[status];

  return (
    <div className={`flex h-10 w-[104px] rounded-md bg-opacity-10 ${color[0]}`}>
      <div className="m-auto flex items-center text-xs font-bold">
        <div className={`mr-2 h-2 w-2 rounded-full opacity-100 ${color[0]}`} />
        <p className={`pt-0.5 first-letter:uppercase ${color[1]}`}>{status}</p>
      </div>
    </div>
  );
};

export default AccessStatus;
