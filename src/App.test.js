import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("할 일을 추가하면 목록에 표시된다", () => {
  render(<App />);
  userEvent.type(screen.getByRole("textbox"), "장보기");
  userEvent.click(screen.getByRole("button", { name: "작성하기" }));
  expect(screen.getByText("장보기")).toBeInTheDocument();
});

test("완료 필터를 선택하면 완료된 할 일만 보인다", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  userEvent.type(input, "운동하기");
  userEvent.click(screen.getByRole("button", { name: "작성하기" }));
  userEvent.type(input, "책 읽기");
  userEvent.click(screen.getByRole("button", { name: "작성하기" }));

  userEvent.click(screen.getAllByRole("checkbox")[0]);
  userEvent.click(screen.getByRole("button", { name: "완료" }));

  expect(screen.getByText("운동하기")).toBeInTheDocument();
  expect(screen.queryByText("책 읽기")).not.toBeInTheDocument();
});
