import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";

const TopPanel = () => {
    return (
        <div className="panel__top border-b-2 border-neutral">
          <div className="panel__devices"></div>
          <div className="divider"></div>
          <ThemeSwitcher />
          <div className="divider"></div>
          <div className="panel__switcher"></div>
        </div>
    )
}

export default TopPanel;