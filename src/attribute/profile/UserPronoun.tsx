import { P } from 'src/html';
import { Pronoun } from 'wenum';

interface UserPronounProps {
  pronoun: Pronoun;
}

function UserPronoun({ pronoun }: UserPronounProps) {
  if (pronoun === Pronoun.None) return null;
  return (
    <P className="text-gray-600 text-sm" text={pronoun === Pronoun.He ? 'He/Him' : 'She/Her'} />
  );
}

export default UserPronoun;
