const postStyle = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 20,
  border: "1px solid gray",
  padding: 20
};

export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={postStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={image} alt="User" style={{ borderRadius: 20, width: 30, height: 30 }} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ fontSize: 16 }}>{name}</div>
          <div style={{ fontSize: 12 }}>{subtitle}</div>
        </div>
        <div>
          {time && (
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", fontSize: 12 }}>
              <div>{time}</div>
              <img
                src="https://e7.pngegg.com/pngimages/879/328/png-clipart-alarm-clocks-logo-alarm-device-computer-icons-clock-text-sign.png"
                alt="clock"
                style={{ width: 10, height: 10, marginLeft: 5 }}
              />
            </div>
        )}
        </div>
      </div>
      <div style={{ fontSize: 14, marginTop: 10 }}>{description}</div>
    </div>
  );
}
