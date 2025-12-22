// layout.tsx
import DoxaSidebar from "./components/sidebar.tsx"
import DoxaHeader from "./components/header.tsx"
import ChatBot from "./pages/ChatBot.tsx"
import "./layout.css"

function layout() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '210px 1fr',  
      gridTemplateRows: '70px 1fr',       
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    }}>
       <div style={{ gridColumn: '1', gridRow: '1 / 3' }}>
        <DoxaSidebar />
      </div>


      <div style={{ gridColumn: '2', gridRow: '1' }}>
        <DoxaHeader />
      </div>


      <div style={{ 
        overflow: "hidden",
        margin: 0,
        padding: 0,
        gridColumn: '2', 
        gridRow: '2',
        boxSizing: 'border-box',
      }}>
        <ChatBot title="Dashboard" />
        
        
      </div>
    </div>
  );
}

export default layout;