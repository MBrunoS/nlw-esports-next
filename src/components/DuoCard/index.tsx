import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { Button } from "../Button";
import { DuoInfo } from "../DuoInfo";

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekdays: string[];
  yearsPlaying: number;
  discord: string;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  async function handleCopyToClipboard() {
    toast.success("Usuário do Discord copiado para sua área de transferência");
  }

  return (
    <div className="bg-[#2A2634] p-5 rounded-lg">
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekdays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? "#34D399" : "#F87171"}
      />

      <CopyToClipboard text={data.discord} onCopy={handleCopyToClipboard}>
        <Button className="text-white w-full justify-center" icon={<></>}>
          Discord: {data.discord}
        </Button>
      </CopyToClipboard>
    </div>
  );
}
