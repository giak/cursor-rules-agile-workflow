// Cet exemple contient des éléments conformes et non conformes
// aux conventions de nommage pour illustrer le fonctionnement d'ESLint

// === Variables ===

// ✅ Variables standard (camelCase)
const userData = { name: 'John', age: 30 };

// ❌ Variables standard (devrait être camelCase, pas snake_case)
const user_data = { name: 'Alice', age: 25 };

// ✅ Variables booléennes (isPrefixed)
const isActive = true;
const hasPermission = true;

// ❌ Variables booléennes (manque préfixe is/has/should/can)
const active = false;
const loggedIn = true;

// ✅ Constantes (SCREAMING_SNAKE_CASE)
const MAX_ATTEMPTS = 3;
const API_URL = 'https://api.example.com';

// ❌ Constantes (devrait être SCREAMING_SNAKE_CASE)
const MaxAttempts = 5;
const apiUrl = 'https://api.example.com/v2';

// === Fonctions ===

// ✅ Fonctions standard (camelCase)
function getUserData() {
  return userData;
}

// ❌ Fonctions standard (devrait être camelCase, pas PascalCase)
function GetUserData() {
  return userData;
}

// ✅ Fonctions booléennes (isPrefixed)
function isValidEmail(email: string): boolean {
  return email.includes('@');
}

// ❌ Fonctions booléennes (manque préfixe is/has/should/can)
function validEmail(email: string): boolean {
  return email.includes('@');
}

// ✅ Fonctions factory (createPrefixed)
function createUser(name: string) {
  return { name, id: Math.random() };
}

// ❌ Fonctions factory (devrait utiliser préfixe create)
function makeUser(name: string) {
  return { name, id: Math.random() };
}

// ✅ Gestionnaires d'événements (handlePrefixed)
function handleClick(event: unknown) {
  console.log('Clicked', event);
}

// ❌ Gestionnaires d'événements (devrait utiliser préfixe handle)
function onClick(event: unknown) {
  console.log('Clicked', event);
}

// === Classes ===

// ✅ Classes standard (PascalCase)
class UserProfile {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  // ✅ Méthodes standard (camelCase)
  updateProfile(newName: string) {
    this.name = newName;
  }
  
  // ❌ Méthodes standard (devrait être camelCase, pas PascalCase)
  UpdateProfile(newName: string) {
    this.name = newName;
  }
  
  // ✅ Méthodes privées (_camelCase)
  private _validateName(name: string): boolean {
    return name.length > 0;
  }
  
  // ❌ Méthodes privées (devrait être _camelCase)
  private validateName(name: string): boolean {
    return name.length > 0;
  }
}

// ❌ Classes standard (devrait être PascalCase, pas camelCase)
class userProfile {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

// ✅ Classes abstraites (AbstractPascalCase)
abstract class AbstractRepository<T> {
  abstract findById(id: string): T | null;
}

// ❌ Classes abstraites (devrait commencer par Abstract)
abstract class BaseRepository<T> {
  abstract findById(id: string): T | null;
}

// ✅ Services (PascalCaseService)
class AuthenticationService {
  login(username: string, password: string): boolean {
    return username === 'admin' && password === 'password';
  }
}

// ❌ Services (devrait se terminer par Service)
class Authentication {
  login(username: string, password: string): boolean {
    return username === 'admin' && password === 'password';
  }
}

// === Types ===

// ✅ Interfaces (PascalCaseInterface)
interface UserDataInterface {
  name: string;
  age: number;
}

// ❌ Interfaces (devrait se terminer par Interface)
interface UserData {
  name: string;
  age: number;
}

// ✅ Type Aliases (PascalCaseType)
type ResponseType = {
  success: boolean;
  data?: unknown;
};

// ❌ Type Aliases (devrait se terminer par Type)
type Response = {
  success: boolean;
  data?: unknown;
};

// ✅ Enums (PascalCaseEnum)
enum StatusEnum {
  // ✅ Enum Members (SCREAMING_SNAKE_CASE)
  ACTIVE,
  INACTIVE,
  PENDING
}

// ❌ Enums (devrait se terminer par Enum)
enum Status {
  // ❌ Enum Members (devrait être SCREAMING_SNAKE_CASE)
  Active,
  Inactive,
  Pending
}

// Export pour pouvoir utiliser avec ESLint
export {
  userData,
  user_data,
  isActive,
  active,
  MAX_ATTEMPTS,
  MaxAttempts,
  getUserData,
  GetUserData,
  isValidEmail,
  validEmail,
  createUser,
  makeUser,
  handleClick,
  onClick,
  UserProfile,
  userProfile,
  AbstractRepository,
  BaseRepository,
  AuthenticationService,
  Authentication,
  UserDataInterface,
  UserData,
  ResponseType,
  Response,
  StatusEnum,
  Status
};