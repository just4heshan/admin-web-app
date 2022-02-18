import { useEffect, useState } from "react";
import { Button, Fab, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import ReusableTable from "./components/ReusableTable";
import LoadingCard from "./components/LoadingCard.jsx";
import ContactForm from "./components/ContactForm";
import CustomAlert from "./components/CustomAlert.jsx";
import ContactPreview from "./components/ContactPreview";
import { reset, initialize } from "redux-form";
import { useActions } from "./hooks";
import { theme } from "./theme";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const FloatingActionButtonContainer = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
`;

function ContactApp() {
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const {
        getContactList,
        addNewContact,
        updateContactDetails,
        deleteContacts,
        cleanContact,
        setContactDetails,
        cleanContactDetails,
    } = useActions();
    const { collections: contacts, details: contactDetails } = useSelector(
        (state) => state.contact
    );
    const form = {
        open: () => setOpenForm(true),
        close: () => {
            dispatch(reset("contactForm")); // reset the redux form state of contactForm
            setOpenForm(false);
        },
    };
    const actions = {
        submit: (formValues) => {
            form.close();
            if (isEditing) {
                updateContactDetails(formValues);
            } else {
                addNewContact(formValues);
            }
        },
        create: () => {
            setIsEditing(false);
            dispatch(initialize("contactForm", {})); // always initial the redux form with empty object as we are creating brand new data
            form.open();
        },
        edit: (contact) => {
            setIsEditing(true);
            dispatch(initialize("contactForm", contact)); // initialize the redux form with the clicked contact as we are editing an existing data
            form.open();
        },
        view: {
            open: (contact) => {
                setContactDetails(contact);
            },
            close: () => cleanContactDetails(),
        },
        delete: (contactIds) => {
            deleteContacts(contactIds);
        },
    };

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getContactList();
        }
        return () => {
            mounted = false;
            cleanContact();
        };
    }, [getContactList, cleanContact]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                {contacts ? (
                    <ReusableTable
                        data={contacts.map((contact) => ({
                            ..._.omit(contact, ["listId"]),
                            edit: (
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    onClick={() => actions.edit(contact)}
                                >
                                    Edit
                                </Button>
                            ),
                            view: (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => actions.view.open(contact)}
                                >
                                    View
                                </Button>
                            ),
                        }))}
                        onDelete={actions.delete}
                    />
                ) : (
                    <LoadingCard />
                )}
                <FloatingActionButtonContainer>
                    <Fab color="primary" onClick={actions.create}>
                        <AddIcon />
                    </Fab>
                </FloatingActionButtonContainer>
                <ContactForm
                    open={openForm}
                    onClose={form.close}
                    onSubmit={actions.submit}
                    title={isEditing ? "Edit Contact" : "Add Contact"}
                />
                {contactDetails !== null && (
                    <ContactPreview
                        open={contactDetails !== null}
                        onClose={actions.view.close}
                        contacts={contactDetails}
                    />
                )}
            </Container>
            <CustomAlert />
        </ThemeProvider>
    );
}

export default ContactApp;
