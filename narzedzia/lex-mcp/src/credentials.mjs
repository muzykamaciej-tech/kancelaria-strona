/* credentials.mjs — login i hasło do LEX.
   Kolejność: zmienne LEX_LOGIN + LEX_PASSWORD, potem pęk kluczy macOS (usługa „lex-mcp”).
   Hasło nie trafia do plików ani do repozytorium. */
import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
export const KEYCHAIN_SERVICE = 'lex-mcp';

async function fromKeychain() {
  if (process.platform !== 'darwin') return null;
  try {
    const { stdout: attrs } = await run('security', ['find-generic-password', '-s', KEYCHAIN_SERVICE]);
    const login = /"acct"<blob>="([^"]*)"/.exec(attrs)?.[1];
    const { stdout: password } = await run('security', ['find-generic-password', '-s', KEYCHAIN_SERVICE, '-w']);
    return login ? { login, password: password.replace(/\n$/, ''), source: 'pęk kluczy macOS' } : null;
  } catch {
    return null;
  }
}

export async function getCredentials() {
  if (process.env.LEX_LOGIN && process.env.LEX_PASSWORD) {
    return { login: process.env.LEX_LOGIN, password: process.env.LEX_PASSWORD, source: 'zmienne środowiskowe' };
  }
  const kc = await fromKeychain();
  if (kc) return kc;
  throw new Error('Brak danych logowania do LEX. W Terminalu: cd narzedzia/lex-mcp && npm run setup '
    + '(zapisze e-mail i hasło w pęku kluczy macOS) albo ustaw LEX_LOGIN i LEX_PASSWORD.');
}

// Zapis w pęku kluczy: hasło wpisuje się w okienku polecenia `security` (nie trafia do historii ani argumentów).
export function saveToKeychain(login) {
  if (process.platform !== 'darwin') throw new Error('Pęk kluczy jest tylko na macOS. Użyj zmiennych LEX_LOGIN i LEX_PASSWORD.');
  return new Promise((resolve, reject) => {
    const p = spawn('security', ['add-generic-password', '-U', '-s', KEYCHAIN_SERVICE, '-a', login,
      '-l', 'LEX (Wolters Kluwer) – lex-mcp', '-w'], { stdio: 'inherit' });
    p.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`security zakończył się kodem ${code}`))));
  });
}
