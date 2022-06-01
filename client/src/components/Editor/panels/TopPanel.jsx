import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";

const TopPanel = () => {
    return (
        <div className="panel__top border-b-2 border-neutral bg-gradient-to-l from-primary to-secondary">
          <div className="panel__devices hidden lg:flex"></div>
          <div className="divider"></div>
          <ThemeSwitcher />
          <div className="divider"></div>
          <div className="panel__switcher hidden lg:flex"></div>
        </div>
    )
}

export default TopPanel;