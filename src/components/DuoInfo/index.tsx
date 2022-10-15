interface Props {
  label: string;
  value: string;
  colorValue?: string;
}

export function DuoInfo({ label, value, colorValue = "#ffffff" }: Props) {
  return (
    <div className="w-full mb-4">
      <p className="text-zinc-400 mb-1">{label}</p>

      <p className="font-bold" style={{ color: colorValue }}>
        {value}
      </p>
    </div>
  );
}
