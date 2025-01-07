interface BookingRulesProps {
  rules: string[];
}

export const BookingRules = ({ rules }: BookingRulesProps) => {
  if (rules.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Booking Rules</h2>
      <ul className="list-disc list-inside space-y-2">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};