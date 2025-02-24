import { assertEquals } from "jsr:@std/assert";

interface UserClients {
  name: string;
  roles: string[];
  email: string;
}

const userIsAdmin = {
  name: "Maple",
  roles: [
    "admin",
  ],
  email: "example@gmail.com",
};

const userIsAdminAndEditor = {
  name: "Maple",
  roles: [
    "admin",
    "editor",
  ],
  email: "example@gmail.com",
};

const userIsEditor = {
  name: "Maple",
  roles: [
    "editor",
  ],
  email: "example@gmail.com",
};

const userIsViewer = {
  name: "Maple",
  roles: [
    "viewer",
  ],
  email: "example@gmail.com",
};

const isAdmin = (user: UserClients): boolean => {
  return user?.roles?.includes("admin");
};

const isEditor = (user: UserClients): boolean => {
  return user?.roles?.includes("editor");
};

const allowReadOnly = (user: UserClients): boolean => {
  if (isAdmin(user) || isEditor(user)) return false;

  return true;
};

Deno.test("user is admin", () => {
  assertEquals(isAdmin(userIsAdmin), true);
  assertEquals(isEditor(userIsAdmin), false);
});

Deno.test("user is editor", () => {
  assertEquals(isEditor(userIsEditor), true);
  assertEquals(isAdmin(userIsEditor), false);
});

Deno.test("user is viewer", () => {
  assertEquals(isEditor(userIsViewer), false);
  assertEquals(isAdmin(userIsViewer), false);
});

Deno.test("user have admin role", () =>
  assertEquals(isAdmin(userIsAdminAndEditor), true));

Deno.test("user have editor role", () =>
  assertEquals(isEditor(userIsAdminAndEditor), true));

Deno.test("user with viewer access can only read", () =>
  assertEquals(allowReadOnly(userIsViewer), true));

Deno.test("user with editor access can read and edit", () =>
  assertEquals(!allowReadOnly(userIsEditor), true));

Deno.test("user with admin access can read and edit", () =>
  assertEquals(!allowReadOnly(userIsAdmin), true));

Deno.test("user with admin or editor access can read and edit", () =>
  assertEquals(!allowReadOnly(userIsAdminAndEditor), true));
