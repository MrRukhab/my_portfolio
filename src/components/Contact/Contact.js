import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "rukhabamir0010@gmail.com";
  const whatsappLink = "https://wa.me/923170772810";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>

        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* EMAIL SECTION */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail size={22} style={{ color: "#151418" }} />
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{email}</span>
                  <Tooltip
                    PopperProps={{ disablePortal: true }}
                    open={showTooltip}
                    onClose={() => setShowTooltip(false)}
                    title="Copied!"
                    TransitionComponent={Zoom}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    placement="top"
                  >
                    <IconButton onClick={copyToClipboard}>
                      <MdContentCopy
                        size={20}
                        style={{ cursor: "pointer", color: "#151418" }}
                      />
                    </IconButton>
                  </Tooltip>
                </div>

                {/* EMAIL BUTTON */}
                <a
                  className="btn PrimaryBtn btn-shadow"
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  <MdEmail size={18} />
                  Send Email
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                  className="btn PrimaryBtn btn-shadow"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    backgroundColor: "#25D366",
                    color: "white",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
