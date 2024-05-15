type User2 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends User2>(initialValues: Partial<T>) {
  // Оновлення користувача
}

createOrUpdateUser<User2>({
  email: "user@mail.com",
  password: "password123",
});
