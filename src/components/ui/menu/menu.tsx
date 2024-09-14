import type { Menu } from "./type"
import ButtonComp from "../button/button"

const MenuComp = (props: Menu) => {
  const { items } = props
  return (
    <div>
      <ButtonComp>
        Menu
      </ButtonComp>
      <div className="">
        <ul>
          {
            items.map(item => (
              <li>{ item.title }</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default MenuComp
