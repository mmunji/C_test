- Dropdown:
  - `type?: "genre" | "icon" | "text"` (default = text)
- Dropdown.Trigger: 트리거 엘리먼트 만들어주시면 됩니다. ❗️이 컴포넌트의 높이를 기준으로 위치를 자동 조정합니다.❗️
- Dropdown.List: Item 컴포넌트 래퍼
  - `className?:className`: 클래스네임을 추가하면 위치 조정이 해제됩니다.
- Dropdown.Item:
  - `onClick:fn` 핸들러 이벤트 설정해주세요.
  - `isFocused:boolean` focus의 경우 설정해주세요

### type === 'genre' | 'text'

```jsx
<Dropdown type="genre">
  <Dropdown.Trigger className="top-[33px]">
    <div className="bg-blue-500 text-white">아무거나</div>
  </Dropdown.Trigger>
  <Dropdown.List>
    {MEMU2.map((m) => (
      <Dropdown.Item key={m} onClick={() => console.log(m)}>
        {m}
      </Dropdown.Item>
    ))}
  </Dropdown.List>
</Dropdown>
```

### type === 'icon'

```jsx
<Dropdown type="icon">
  <Dropdown.Trigger>
    <div className="bg-blue-500 text-white">아무거나</div>
  </Dropdown.Trigger>
  <Dropdown.List>
    {MEMU2.map((m) => (
      <Dropdown.Item key={m} onClick={() => console.log(m)}>
        <div className="flex items-center gap-2">
          <Image src={m.icon} alt={m.content} className="mr-2 h-6 w-6" />
          <p>{m.content}</p>
        </div>
      </Dropdown.Item>
    ))}
  </Dropdown.List>
</Dropdown>
```
